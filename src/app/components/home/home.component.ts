import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {initCanvas, updateCanvas, drawDot} from '../../../scripts/coordinate-plane';
import {PointService} from '../services/point.service';
import {NgClass} from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgClass,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    pointService = inject(PointService)
    formBuilder = inject(FormBuilder)
    auth_token: string | null = ''

    xOptions: number[] = [-3, -2, -1, 0, 1, 2, 3, 4, 5]
    rOptions: number[] = [1, 2, 3, 4, 5]
    results: { x: number, y: number, r: number, hitResult: boolean, color: string } [] = []

    pointForm: FormGroup = this.formBuilder.group({
        x: [0],
        y: [0],
        r: [5],
    })

    get x() {
        return this.pointForm.controls['x']
    }

    get y() {
        return this.pointForm.controls['y']
    }

    get r() {
        return this.pointForm.controls['r']
    }

    loadUserPoints() {
        this.auth_token = localStorage.getItem('auth_token')

        if (this.auth_token) {
            this.pointService.getAllUserPoints(this.auth_token).subscribe({
                next: (points) => {
                    points.forEach((point: {
                        x: number,
                        y: number,
                        r: number,
                        hitResult: boolean,
                        username: string
                    }) => {
                        const color = point.hitResult ? 'green' : 'red'

                        this.results.unshift({
                            x: parseFloat(point.x.toFixed(4)),
                            y: parseFloat(point.y.toFixed(4)),
                            r: point.r,
                            hitResult: point.hitResult,
                            color: color
                        })

                        drawDot(point.x, point.y, color)
                    })

                }, error: (error) => console.log(error)
            })
        }

    }

    OnSubmitForm() {
        this.auth_token = localStorage.getItem('auth_token')

        if (this.auth_token) {

            this.pointService.addPoint(this.x.value, this.y.value, this.r.value, this.auth_token).subscribe({
                next: (response) => {
                    const result = /^true$/i.test(response)
                    drawDot(this.x.value, this.y.value, result ? 'green' : 'red')

                    this.results.unshift({
                        x: this.x.value,
                        y: this.y.value,
                        r: this.r.value,
                        hitResult: result,
                        color: result ? 'green' : 'red'
                    })
                },
                error: (error) => console.log(error)
            })
        }
    }

    OnGraphClick(event: MouseEvent) {
        const canvas = document.getElementById('coordinate-plane') as HTMLCanvasElement
        const canvasPosition = canvas.getBoundingClientRect()

        const clickX = event.clientX - canvasPosition.left
        const clickY = event.clientY - canvasPosition.top

        const x = parseFloat(((parseFloat(clickX.toFixed(2)) - canvas.width / 2) / 60).toFixed(2))
        const y = parseFloat(((canvas.height / 2 - parseFloat(clickY.toFixed(2))) / 60).toFixed(2))

        this.auth_token = localStorage.getItem('auth_token')

        if (this.auth_token) {

            this.pointService.addPoint(x, y, this.r.value, this.auth_token).subscribe({
                next: (response) => {
                    const result = /^true$/i.test(response)
                    drawDot(x, y, result ? 'green' : 'red')

                    this.results.unshift({
                        x: x,
                        y: y,
                        r: this.r.value,
                        hitResult: result,
                        color: result ? 'green' : 'red'
                    })
                },
                error: (error) => console.log(error)
            })
        }
    }

    ngOnInit(): void {
        initCanvas(5)
        this.loadUserPoints()
    }

    updatePoints(r: number) {
        updateCanvas(r)
        this.results.forEach((point: {
            x: number,
            y: number,
            r: number,
            hitResult: boolean,
            color: string
        }) => drawDot(point.x, point.y, point.color))
    }
}

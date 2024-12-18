/* eslint-disable  @typescript-eslint/no-explicit-any */

'use client'

import React from 'react';
import '@/styles/Logo.scss';

interface Square {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    x3: number;
    y3: number;
    x4: number;
    y4: number;
}

interface Circle {
    x_center: number;
    y_center: number;
    radius: number;
}


interface State {
    square: Square;
    smallCircle: Circle;
    curAngleSmallCir: number;
}

class Logo extends React.Component<Record<string, never>, State> {
    private canvasRef: React.RefObject<any>;
    private canvas: HTMLCanvasElement | null = null;
    private contextCv: CanvasRenderingContext2D | null = null;
    private intervalId: number | NodeJS.Timeout | null = null; // Store the interval ID

    constructor(props: Record<string, never>) {
        super(props);

        // Initialize the square state
        this.state = {
            square: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                x3: 0,
                y3: 0,
                x4: 0,
                y4: 0
            },
            smallCircle: {
                x_center: 0,
                y_center: 0,
                radius: 0
            },
            curAngleSmallCir: 0,
        };

        this.canvasRef = React.createRef<HTMLCanvasElement>();
    }

    componentDidMount() {
        if (this.canvasRef) {
            this.canvas = this.canvasRef.current; // Assign the canvas reference
        }
        if (this.canvas) {
            this.contextCv = this.canvas.getContext('2d'); // Get the 2D rendering contextCv
            this.initialize();
        }
        this.intervalId = setInterval(this.autoUpdateSquare, 300); // Update every second
        this.intervalId = setInterval(this.autoUpdateCircle, 50); // Update every second
    }

    componentWillUnmount() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    initialize = () => {
        if (!this.canvas) {
            console.error('Canvas is not initialized.');
            return;
        }

        const frame_width = this.canvas.width;
        const frame_height = this.canvas.height;

        this.setState(
            {
                square: {
                    x1: frame_width / 2,
                    y1: 0,
                    x2: frame_width,
                    y2: frame_height / 2,
                    x3: frame_width / 2,
                    y3: frame_height,
                    x4: 0,
                    y4: frame_height / 2,
                },
                smallCircle: {
                    x_center: this.canvas.width / 2,
                    y_center: 47 * this.canvas.height / 128,
                    radius: 1
                },
                curAngleSmallCir: 90,
            },
            this.drawShape // Draw the square after initializing
        );
    };

    autoUpdateSquare = () => {
        if (!this.canvas) return;

        const frame_width = this.canvas.width;
        const frame_height = this.canvas.height;

        // Center of the canvas
        const centerX = frame_width / 2;
        const centerY = frame_height / 2;

        // Current square coordinates
        const { x1, y1, x2, y2, x3, y3, x4, y4 } = this.state.square;

        // Angle of rotation (in degrees)
        const angle = 10; // Rotate by 10 degrees on each update

        // Apply the rotation matrix to each vertex
        const [newX1, newY1] = rotatePoint(x1, y1, centerX, centerY, angle);
        const [newX2, newY2] = rotatePoint(x2, y2, centerX, centerY, angle);
        const [newX3, newY3] = rotatePoint(x3, y3, centerX, centerY, angle);
        const [newX4, newY4] = rotatePoint(x4, y4, centerX, centerY, angle);

        // Update the square in state
        const newSquare = {
            x1: newX1,
            y1: newY1,
            x2: newX2,
            y2: newY2,
            x3: newX3,
            y3: newY3,
            x4: newX4,
            y4: newY4,
        };

        this.setState(
            { square: newSquare },
            this.drawShape // Re-draw the square after the update
        );
    };

    autoUpdateCircle = () => {

        if (!this.canvas) return;

        const { radius } = this.state.smallCircle

        const originX = this.canvas.width / 2
        const originY = 13 * this.canvas.height / 32
        const originRadius = 5 * this.canvas.height / 128

        let angle = this.state.curAngleSmallCir

        angle += 10
        angle %= 360

        const [newX, newY] = rotateCenterCircle(originX, originY, originRadius, angle)

        const smallCircle = {
            x_center: newX,
            y_center: newY,
            radius: radius
        }


        this.setState({
            smallCircle: smallCircle,
            curAngleSmallCir: angle
        },
            this.drawShape // Re-draw the square after the update
        );
    };

    drawShape = () => {
        if (!this.canvas || !this.contextCv) {
            console.error('Canvas or contextCv is not initialized.');
            return;
        }
        this.drawRotatedSquare();

        this.drawRectangle(this.canvas.width / 4, this.canvas.height / 4, this.canvas.width / 2, this.canvas.height / 2, "#000000");
        this.drawRectangle(3 * this.canvas.width / 8, this.canvas.height / 4, this.canvas.width / 4, 3 * this.canvas.height / 16, "#0f172a");
        this.drawRectangle(3 * this.canvas.width / 8, 9 * this.canvas.height / 16, this.canvas.width / 4, 3 * this.canvas.height / 16, "#0f172a");

        this.contextCv.fillStyle = "#03FFF7";
        this.contextCv.font = `${this.canvas.width / 16}px Arial`;
        this.contextCv.fillText("Moi", 14.5 * this.canvas.width / 32, 3 * this.canvas.height / 4);

        this.drawRectangle(this.canvas.width / 2 - 5, this.canvas.height / 2 - 5, 10, 10, "#03FFF7");

        this.drawCircle(this.canvas.width / 2, 13 * this.canvas.height / 32, 5 * this.canvas.height / 64, "#0f172a");
        this.drawCircle(13 * this.canvas.width / 32, 35 * this.canvas.height / 64, 3 * this.canvas.height / 32 - 1, "#0f172a");
        this.drawCircle(19 * this.canvas.width / 32, 35 * this.canvas.height / 64, 3 * this.canvas.height / 32 - 1, "#0f172a");

        this.drawCircle(13 * this.canvas.width / 32, 35 * this.canvas.height / 64, 3 * this.canvas.height / 64, "#000000");
        this.drawCircle(19 * this.canvas.width / 32, 35 * this.canvas.height / 64, 3 * this.canvas.height / 64, "#000000");
        this.drawCircle(13 * this.canvas.width / 32, 35 * this.canvas.height / 64, 1, "#ffffff");
        this.drawCircle(19 * this.canvas.width / 32, 35 * this.canvas.height / 64, 1, "#ffffff");

        this.drawRotatedCircle()
        // this.drawRotatedSatellitePoint()
    }


    drawRotatedSquare = () => {
        if (!this.canvas || !this.contextCv) {
            console.error('Canvas or contextCv is not initialized.');
            return;
        }

        const contextCv = this.contextCv;

        contextCv.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Get square coordinates from the state
        const { x1, y1, x2, y2, x3, y3, x4, y4 } = this.state.square;

        // Draw the square
        const grad = contextCv.createLinearGradient(0, 0, 160, 100);
        grad.addColorStop(0, "#03FFF7");
        grad.addColorStop(0.75, "#a21caf");
        grad.addColorStop(1, "#0f172a");
        contextCv.strokeStyle = grad;
        contextCv.beginPath();
        contextCv.moveTo(x1, y1);
        contextCv.lineTo(x2, y2);
        contextCv.lineTo(x3, y3);
        contextCv.lineTo(x4, y4);
        contextCv.closePath();
        contextCv.stroke();
    };

    drawRotatedCircle = () => {
        if (!this.canvas || !this.contextCv) {
            console.error('Canvas or contextCv is not initialized.');
            return;
        }

        const { x_center, y_center, radius } = this.state.smallCircle;

        this.drawCircle(x_center, y_center, radius, "#fde047");
    }

    drawRectangle = (rec_x_top: number, rec_y_left: number, rec_width: number, rec_height: number, color: string) => {
        if (!this.canvas || !this.contextCv) {
            console.error('Canvas or contextCv is not initialized.');
            return;
        }

        const contextCv = this.contextCv;

        // Draw the rectangle
        contextCv.fillStyle = color;
        contextCv.fillRect(rec_x_top, rec_y_left, rec_width, rec_height);
        contextCv.stroke();
    }

    drawCircle = (x_center: number, y_center: number, radius: number, color: string) => {
        if (!this.canvas || !this.contextCv) {
            console.error('Canvas or contextCv is not initialized.');
            return;
        }

        const contextCv = this.contextCv;

        // Draw the rectangle
        contextCv.beginPath();
        contextCv.arc(x_center, y_center, radius, 0, 2 * Math.PI);
        contextCv.fillStyle = color;
        contextCv.fill();
        contextCv.lineWidth = 4;
        contextCv.strokeStyle = color;
        contextCv.stroke();
    }


    render() {
        return (
            <div className="canvas-frame">
                <canvas
                    ref={this.canvasRef}
                    width={200}
                    height={200}
                    style={{}} // Canvas frame
                />
            </div>
        );
    }
}

const rotatePoint = (x: number, y: number, centerX: number, centerY: number, angle: number): [number, number] => {
    // Convert angle to radians
    const radians = (Math.PI / 180) * angle;

    // Apply the rotation matrix
    const newX = Math.cos(radians) * (x - centerX) - Math.sin(radians) * (y - centerY) + centerX;
    const newY = Math.sin(radians) * (x - centerX) + Math.cos(radians) * (y - centerY) + centerY;

    return [newX, newY];
};

const rotateCenterCircle = (originX: number, originY: number, originRadius: number, angle: number): [number, number] => {
    // Convert angle to radians
    const radians = (Math.PI / 180) * angle;

    // Apply the rotation matrix
    const newX = Math.cos(radians) * originRadius + originX
    const newY = Math.sin(radians) * originRadius + originY

    return [newX, newY];
};


export default Logo;

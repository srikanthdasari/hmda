import * as React from "react";
import { Axis } from "./axis";

interface IAxesProps {
    scales : Scales;
    margins : Margins;
    svgDimensions: ChartDimensions;
}

class Axes extends React.Component<IAxesProps,{}> {
    
    constructor(props:IAxesProps) {
        super(props);
    }

    public render() {
        const xProps = {
            orient: 'Bottom',
            scale: this.props.scales.xScale,
            tickSize: this.props.svgDimensions.height - this.props.margins.top - this.props.margins.bottom,
            translate: `translate(0, ${this.props.svgDimensions.height - this.props.margins.bottom})`
        }
        
        const yProps = {
            orient: 'Left',
            scale: this.props.scales.yScale,
            tickSize: this.props.svgDimensions.width - this.props.margins.left - this.props.margins.right,
            translate: `translate(${this.props.margins.left}, 0)`            
        }

        return(
            <g>
                <Axis {...xProps}/>
                <Axis {...yProps}/>
            </g>
        );
    }
}

export default Axes;
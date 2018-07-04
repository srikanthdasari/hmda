import * as d3Axis from 'd3-axis'
import { select as d3Select } from 'd3-selection'
import * as React from 'react';

export class Axis extends React.Component<IAxisProps,{}> {

    private axisElement!: SVGGElement | null;

    constructor(props:IAxisProps) {
        super(props);        
    }

    public componentDidMount() {
        this.renderAxis();
    }

    public componentDidUpdate() {
        this.renderAxis();
    }

    public renderAxis() {
        const axisType = `axis${this.props.orient}`;
        const axis = d3Axis[axisType]()
                    .scale(this.props.scale)
                    .tickSize(-this.props.tickSize)
                    .tickPadding([12])
                    .ticks([4]);
        d3Select(this.axisElement).call(axis);
    }

    public render() {
        return(
            <g
                className={`Axis Axis-${this.props.orient}`}
                ref={(el)=>this.axisElement=el}
                transform={this.props.translate}
            />
        );
    }
}
import { interpolateLab } from 'd3-interpolate';
import { scaleLinear } from "d3-scale";
import * as React from 'react';
interface IBarProps {
    scales : Scales;
    svgDimensions: ChartDimensions;
    margins:Margins;
    data:BarChartDataUnit[];
    maxValue:number;
}

class Bars extends React.Component<IBarProps,{}> {

    private colorScale:any;

    constructor(props:IBarProps) {
        super(props);

        this.colorScale = scaleLinear<string>()
                            .domain([0,this.props.maxValue])
                            .range(['#F3E5F5', '#7B1FA2'])
                            .interpolate(interpolateLab);
        
    }

    public render() {
        const bars= this.props.data.map(datum=>
            <rect
                key={datum.xLable}
                x={this.props.scales.xScale(datum.xLable)}
                y={this.props.scales.yScale(datum.value)}
                height={this.props.svgDimensions.height - this.props.margins.bottom - this.props.scales.yScale(datum.value)}
                width={this.props.scales.xScale.bandwidth()}
                fill={this.colorScale(datum.value)}
            />
        );
        return (
            <g>{bars}</g>
        );
    }
}

export default Bars;
import {scaleBand, scaleLinear} from 'd3-scale';
import * as React from 'react';
import Axes from './axes';

interface IChartProps{
    width:number;
    height:number;
    top:number;
    right:number;
    bottom:number;
    left:number;
    data:BarChartDataUnit[];
}

class BarChart extends React.Component<IChartProps,{}> {
    
    private xScale:any;
    private yScale:any;

    constructor(props:IChartProps){
        super(props);    
        this.xScale = scaleBand();
        this.yScale = scaleLinear();
    }

    public render() {
        const maxValue = Math.max(...this.props.data.map(d => d.value))
        const xScale = this.xScale
                            .padding(0.5)
                            .domain(this.props.data.map(d=>d.xLable))
                            .range([this.props.left, this.props.width - this.props.right ]);
        const yScale = this.yScale
                            .domain([0,maxValue])
                            .range([this.props.height - this.props.bottom,this.props.top]);        
        return(
            <svg width={this.props.width} height={this.props.height} >
                <Axes 
                    scales={{ xScale, yScale }}
                    margins={{ top:this.props.top, right:this.props.right, bottom:this.props.bottom, left:this.props.left }}
                    svgDimensions={{width:this.props.width,height:this.props.height}}
                />
                

            </svg>
        );
    }
}


export default BarChart;
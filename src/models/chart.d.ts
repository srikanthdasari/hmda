interface BarChartDataUnit {
    xLable:string;
    value:number;
    yLable:string;
}

interface Scales {
    xScale:any;
    yScale:any;    
}

interface Margins {
    left:number;
    top:number;
    right:number;
    bottom:number;
}

interface ChartDimensions {
    height :number;
    width : number;
}

interface IAxisProps {
    orient:string;
    scale:Scales.xScale | Scales.yScale;
    tickSize:number;
    translate:string;
}

interface SliceRoutePaths {
    title:string;
    routepath:string;
    
}
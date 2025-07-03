import { Circles, CirclesWithBar, LineWave, RotatingLines } from "react-loader-spinner";

export default function CircleLoader({width,height}){
    return <RotatingLines
    strokeColor="white"
    strokeWidth="2"
    width={width}
    height={height}
    visible={true}/>
}
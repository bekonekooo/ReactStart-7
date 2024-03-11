import classNames from "classnames";
function Skeleton({times,className}){
   
    const outerClassNames=classNames(
        "relative",
        "overflow-hidden",
        "bg-gray-200",
        "rounded",
        "mb-2.5",
        className
    );
    const innerClassNames=classNames(
        "animate-shimmer",
        "absolute",
        "inset-0",
        "-translate-x-full",
        "bg-gradient-to-r",
        "from-gray-200",
        "via-white",
        "to-gray-200"
    );
 // const boxes=[];
    // for (let i=0; i<times; i++ ){
    //     boxes.push(<div key={i}></div>)
    // }
    // return boxes; there is an easier way 
    const boxes=Array(times).fill(0).map((_ , i)=>{
return <div className={outerClassNames} key={i}>
    <div className={innerClassNames}/>
</div>
    })
    return boxes;

}
export default Skeleton;
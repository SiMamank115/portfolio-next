import Compact from "@/helpers/classname";
import random from "@/helpers/random";

export default function Card(props = { link: "", key: "", speed: [1, 1], delay: [1, 0.1], class: "", tooltip: "", img: "", body: "", ringColor: ["", ""], innderHTML: undefined }) {
    const icon = !props.img || props.img != "" ? <div data-img={props.img} className="card-icon"></div> : "";
    const cardbody = props.innderHTML ? (
        <div className="card-body" dangerouslySetInnerHTML={{ __html: e.body }}></div>
    ) : (
        <div className="card-body">
            {icon} {props.body}
        </div>
    );
    return !props.link || props.link == "" ? (
        <div key={props.key ?? "unkey-card"} data-scroll data-scroll-speed={random(...(props.speed ?? [1, 1]))} data-scroll-delay={random(...(props.delay ?? [1, 0.1]))} className={Compact(props.class ?? "", "group card")}>
            <div className="card-header">{props.tooltip ?? ""}</div>
            {cardbody}
        </div>
    ) : (
        <a key={props.key ?? "unkey-card"} style={{ "--tw-ring-color": props.ringColor[random(props.ringColor.length - 1, 0, true)] }} target="_blank" href={props.link} data-scroll data-scroll-speed={random(...(props.speed ?? [1, 1]))} data-scroll-delay={random(...(props.delay ?? [1, 0.1]))} className={Compact(props.class ?? "", "group card")}>
            <div className="card-header">{props.tooltip ?? ""}</div>
            {cardbody}
        </a>
    );
}

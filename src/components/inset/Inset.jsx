import '../../css/inset.css';

export default function Inset({children, side, ...props}) {
    let classInset = 'q-inset';

    if(props.className) {
        classInset += ' ' + props.className;
    }

    return (
        <div className={classInset} data-side={side} {...props}>
            {children}
        </div>
    )
}
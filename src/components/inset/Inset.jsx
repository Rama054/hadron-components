import '../../css/inset.css';

export default function Inset({children, side, className, ...props}) {
    let classInset = 'q-inset';

    if(className) {
        classInset += ' ' + className;
    }

    return (
        <div className={classInset} data-side={side} {...props}>
            {children}
        </div>
    )
}
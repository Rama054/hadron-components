import { useState, useEffect, useRef, useImperativeHandle, useMemo } from 'react';
import Card from '../card/Card';
import Inset from '../inset/Inset';
import '../../css/InputFile.css';
import { createSwapy, utils } from 'swapy';
import * as LuIcons from "react-icons/lu";

export default function InputFile({ label, name, id, multiple, helpText, error, accept, form, disabled, ref, ...props }) {
    
    const [archivos, setArchivos] = useState([]);
    const [slotItemMap, setSlotItemMap] = useState(utils.initSlotItemMap(archivos, 'archivoId'));
    
    const slottedItems = useMemo(() => utils.toSlottedItems(archivos, 'archivoId', slotItemMap), [archivos, slotItemMap]);

    const swapy = useRef(null);
    const container = useRef(null);
    
    useEffect(() => utils.dynamicSwapy(swapy.current, archivos, 'archivoId', slotItemMap, setSlotItemMap), [archivos])

    useEffect(() => {
        if (!container.current || swapy.current) return;

        swapy.current = createSwapy(container.current, {
            dragAxis: 'y',
            autoScrollOnDrag: true,
            manualSwap: true
        });

        swapy.current.onSwap((event) => {
            setSlotItemMap(event.newSlotItemMap.asArray);
        });

       /*  swapy.current.onSwapEnd((event) => {
            if (!event || !event.hasChanged) return;

            const newOrderedFiles = event.slotItemMap.asArray.map(position => {
                return archivos.find(file => file.archivoId === position.item);
            });

            setArchivos(newOrderedFiles);
        }); */

        return () => swapy.current?.destroy();
    }, [archivos]);




    const generateShortId = () => Math.random().toString(36).substring(2, 10);

    const handleFiles = (files) => {
        if (form) form.clearErrors(name);

        const newFiles = Array.from(files).map(file => ({
            type: file.type.split('/')[0],
            extension: file.name.split('.').pop().toLowerCase(),
            url: URL.createObjectURL(file),
            name: file.name,
            archivoId: generateShortId(),
            file
        }));

        setArchivos(prev => multiple ? [...prev, ...newFiles] : newFiles);

        if (form) {
            form.setValue(name, multiple ? [...archivos, ...newFiles].map(f => f.file) : newFiles[0].file);
        }
    };

    const handleFileInput = (e) => {
        e.preventDefault();
        handleFiles(e.target.files);
    };

    const handleDragOver = (e) => e.preventDefault();
    const handleDrop = (e) => {
        e.preventDefault();
        handleFiles(e.dataTransfer.files);
    };

    const handleImageDelete = (id) => {
        const archivosFiltrados = archivos.filter(archivo => archivo.archivoId !== id);
        setArchivos(archivosFiltrados);
    };

    useImperativeHandle(ref, () => ({
        getOrderedFiles: () => slottedItems.map(({ item }) => {
            return item.file;
        }),
    }));


    return (
        <div className="q-input-file-root">
            <label htmlFor={id || `_${label}`}>{label}</label>
            <div className="q-input-file-container" onDragOver={handleDragOver} onDrop={handleDrop}>
                <label>
                    <div className='q-input-file-label'>
                        <p>Arrastra y suelta archivos aquí</p>
                        <p>o haz clic para seleccionarlos</p>
                    </div>
                    <input
                        type="file"
                        id={id || `_${label}`}
                        name={name}
                        accept={accept}
                        hidden
                        multiple={multiple}
                        disabled={disabled}
                        onChange={handleFileInput}
                        {...props}
                    />
                </label>
            </div>
            <span>{archivos.length} archivos adjuntos</span>
            <Card.Root className="q-input-file-preview-container" ref={container}>
                {slottedItems.map(({ slotId, itemId, item: archivo }) => (
                    <div key={slotId} data-swapy-slot={slotId}>
                        <Card.Root key={itemId} data-swapy-item={itemId} style={{ width: '100%' }}>
                            <Card.Body style={{ display: 'flex', alignItems: 'center', gap: '10px', }}>
                                <Inset side="right">
                                    {archivo?.type === 'image' ? (
                                        <div style={{
                                            backgroundImage: `url("${archivo.url}")`,
                                            width: '100px',
                                            height: '90px',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundColor: 'var(--subtitle)'
                                        }} />
                                    ) : (
                                        <div style={{
                                            width: '100px',
                                            height: '90px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <FileIcon type={archivo?.extension} />
                                        </div>
                                    )}
                                </Inset>
                                <p>{archivo?.name} </p>
                                <button data-swapy-no-drag type="button" onClick={() => handleImageDelete(archivo.archivoId)}>❌</button>
                            </Card.Body>
                        </Card.Root>
                    </div>
                ))}
            </Card.Root>
        </div>
    );
}

const FileIcon = ({ type }) => {
    const typeIcons = {
        image: LuIcons.LuFileImage,
        video: LuIcons.LuFileVideo2,
        audio: LuIcons.LuFileAudio,
        zip: LuIcons.LuFileArchive,
        json: LuIcons.LuFileJson,
        txt: LuIcons.LuFileText,
        code: LuIcons.LuFileCode,
        word: LuIcons.LuFileType,
        xls: LuIcons.LuFileSpreadsheet,
        default: LuIcons.LuFile
    };

    const typeMap = {
        image: ['image', 'png', 'jpg', 'jpeg', 'gif'],
        video: ['video', 'mp4', 'avi', 'mov'],
        audio: ['audio', 'mp3', 'wav'],
        zip: ['zip', 'rar', 'tar'],
        json: ['json'],
        txt: ['txt', 'pdf'],
        code: ['js', 'html', 'css', 'yml', 'exe', 'iso', 'bat', 'sql', 'sh', 'php', 'py', 'java', 'c', 'cpp', 'cs', 'go', 'rb', 'swift'],
        word: ['doc', 'docx'],
        xls: ['xls', 'xlsx'],
    };

    const iconType = Object.keys(typeMap).find(key => typeMap[key].includes(type)) || 'default';
    const IconComponent = typeIcons[iconType];

    return <IconComponent size={50} />;
};

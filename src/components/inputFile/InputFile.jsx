import { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import '../../css/InputFile.css';
import { PiTrash, PiUploadSimple } from 'react-icons/pi';
import * as LuIcons from 'react-icons/lu';
import Button from '../button/Button';
import PropTypes from 'prop-types';

const formatSize = (size) => {
    const units = ['bytes', 'KB', 'MB', 'GB'];
    let unitIndex = 0;
    let formattedSize = size;

    while (formattedSize >= 1024 && unitIndex < units.length - 1) {
        formattedSize /= 1024;
        unitIndex++;
    }

    return `${formattedSize.toFixed(1)} ${units[unitIndex]}`;
};

const FileIcon = ({ extension }) => {
    const iconMap = {
        // Images
        png: LuIcons.LuFileImage,
        jpg: LuIcons.LuFileImage,
        jpeg: LuIcons.LuFileImage,
        gif: LuIcons.LuFileImage,
        webp: LuIcons.LuFileImage,
        svg: LuIcons.LuFileImage,
        // Documents
        pdf: LuIcons.LuFile,
        doc: LuIcons.LuFileType,
        docx: LuIcons.LuFileType,
        txt: LuIcons.LuFileText,
        // Spreadsheets
        xls: LuIcons.LuFileSpreadsheet,
        xlsx: LuIcons.LuFileSpreadsheet,
        csv: LuIcons.LuFileSpreadsheet,
        // Archives
        zip: LuIcons.LuFileArchive,
        rar: LuIcons.LuFileArchive,
        '7z': LuIcons.LuFileArchive,
        // Code
        js: LuIcons.LuFileCode,
        jsx: LuIcons.LuFileCode,
        ts: LuIcons.LuFileCode,
        tsx: LuIcons.LuFileCode,
        html: LuIcons.LuFileCode,
        css: LuIcons.LuFileCode,
        json: LuIcons.LuFileJson,
        // Videos
        mp4: LuIcons.LuFileVideo2,
        avi: LuIcons.LuFileVideo2,
        mov: LuIcons.LuFileVideo2,
        // Audio
        mp3: LuIcons.LuFileAudio,
        wav: LuIcons.LuFileAudio,
        flac: LuIcons.LuFileAudio,
    };

    const IconComponent = iconMap[extension?.toLowerCase()] || LuIcons.LuFile;
    return <IconComponent size={20} />;
};

const InputFile = forwardRef(function InputFile({
    label,
    name,
    multiple = false,
    helpText,
    accept,
    errorText,
    disabled = false,
    maxFiles = null,
    maxSize = null,
    className = '',
    icon: CustomIcon = PiUploadSimple,
    dropzoneText = 'Arrastra archivos aquí o haz clic para explorar',
    listHeight = '200px', // altura por defecto de la lista
    onChange,
    onBlur,
    value,
    form = null, // react-hook-form object
    ...props
}, ref) {
    const [internalFiles, setInternalFiles] = useState([]);
    const [dragActive, setDragActive] = useState(false);
    
    // Get current value from react-hook-form or props
    const getCurrentValue = () => {
        if (form && name) {
            const formValue = form.watch(name);
            return formValue || [];
        }
        return value || internalFiles;
    };
    
    // Determine which files to display
    const filesToDisplay = getCurrentValue();
    
    // Update internal files when external value changes
    useEffect(() => {
        if (value && Array.isArray(value)) {
            setInternalFiles(value);
        }
    }, [value]);

    useImperativeHandle(ref, () => ({
        focus: () => document.getElementById(`file-input-${name}`)?.focus(),
        blur: () => document.getElementById(`file-input-${name}`)?.blur()
    }));

    const validateFiles = (fileList) => {
        const validFiles = [];
        const errors = [];

        Array.from(fileList).forEach(file => {
            // Check file size
            if (maxSize && file.size > maxSize) {
                errors.push(`${file.name} excede el tamaño máximo de ${formatSize(maxSize)}`);
                return;
            }

            // Check file count
            if (maxFiles && filesToDisplay.length + validFiles.length >= maxFiles) {
                errors.push(`Máximo ${maxFiles} archivos permitidos`);
                return;
            }

            validFiles.push(file);
        });

        return { validFiles, errors };
    };

    const handleFiles = (fileList) => {
        const { validFiles, errors } = validateFiles(fileList);
        
        if (errors.length > 0) {
            console.warn('Errores de validación:', errors);
        }

        const newFiles = multiple ? [...filesToDisplay, ...validFiles] : validFiles;
        
        // Update internal state
        setInternalFiles(newFiles);
        
        // Handle react-hook-form integration
        if (form && name) {
            // Use react-hook-form's setValue
            form.setValue(name, multiple ? newFiles : newFiles[0] || null, {
                shouldValidate: true,
                shouldDirty: true
            });
        } else if (onChange) {
            // Fallback to regular onChange
            onChange(multiple ? newFiles : newFiles[0] || null);
        }
    };

    const removeFile = (index) => {
        const newFiles = filesToDisplay.filter((_, i) => i !== index);
        setInternalFiles(newFiles);
        
        // Handle react-hook-form integration
        if (form && name) {
            // Use react-hook-form's setValue
            form.setValue(name, multiple ? newFiles : newFiles[0] || null, {
                shouldValidate: true,
                shouldDirty: true
            });
        } else if (onChange) {
            // Fallback to regular onChange
            onChange(multiple ? newFiles : newFiles[0] || null);
        }
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!disabled) setDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        
        if (!disabled && e.dataTransfer.files) {
            handleFiles(e.dataTransfer.files);
        }
    };

    const handleInputChange = (e) => {
        if (e && e.target && e.target.files) {
            handleFiles(e.target.files);
        }
        if (onBlur) onBlur(e);
    };

    const renderFilePreview = (file, index) => {
        if (!file) return null;
        
        const isImage = file.type?.startsWith('image/');
        const fileName = file.name || 'Archivo sin nombre';
        const fileSize = file.size ? formatSize(file.size) : 'Tamaño desconocido';
        const extension = fileName.includes('.') ? fileName.split('.').pop() : 'unknown';

        return (
            <div key={index} className="q-file-item">
                <div className="q-file-icon">
                    {isImage && file instanceof File ? (
                        <img 
                            src={URL.createObjectURL(file)} 
                            alt={fileName}
                            className="q-file-image"
                        />
                    ) : (
                        <FileIcon extension={extension} />
                    )}
                </div>
                <div className="q-file-info">
                    <div className="q-file-name" title={fileName}>{fileName}</div>
                    <div className="q-file-size">{fileSize}</div>
                </div>
                <div className="q-file-remove">
                    <Button 
                        variant="ghost" 
                        size="sm"
                        color="danger"
                        radius="full"
                        icon
                        onClick={() => removeFile(index)}
                        disabled={disabled}
                    >
                        <PiTrash size={16} />
                    </Button>
                </div>
            </div>
        );
    };

    return (
        <div className={`q-input-file ${className}`}>
            {label && (
                <label className="q-input-file-label" htmlFor={`file-input-${name}`}>
                    {label}
                </label>
            )}
            
            <div 
                className={`q-input-file-dropzone ${dragActive ? 'drag-active' : ''} ${disabled ? 'disabled' : ''}`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => !disabled && document.getElementById(`file-input-${name}`)?.click()}
            >
                <div className="q-dropzone-content">
                    <CustomIcon size={32} className="q-dropzone-icon" />
                    <div className="q-dropzone-text">
                        {dropzoneText.includes('haz clic') ? (
                            dropzoneText.split('haz clic').map((part, i) => (
                                i === 0 ? part : <span key={i}><span className="highlight">haz clic{part.split(' ')[1] === 'para' ? ' para' : ''}</span>{part.slice(part.indexOf(' ', part.indexOf('para') + 1))}</span>
                            ))
                        ) : (
                            <>
                                {dropzoneText} <span className="highlight">haz clic para explorar</span>
                            </>
                        )}
                    </div>
                    {(accept || maxSize || maxFiles) && (
                        <div className="q-dropzone-info">
                            {accept && `Tipos: ${accept}`}
                            {maxSize && ` • Máx: ${formatSize(maxSize)}`}
                            {maxFiles && ` • Límite: ${maxFiles} archivo${maxFiles !== 1 ? 's' : ''}`}
                        </div>
                    )}
                </div>
                
                <input
                    ref={ref}
                    type="file"
                    id={`file-input-${name}`}
                    name={name}
                    accept={accept}
                    multiple={multiple}
                    disabled={disabled}
                    onChange={handleInputChange}
                    className="q-file-input"
                    {...props}
                />
            </div>

            {helpText && <div className="q-input-help-text">{helpText}</div>}
            {errorText && <div className="q-input-error-text">{errorText}</div>}

            {filesToDisplay.length > 0 && (
                <div 
                    className="q-files-list"
                    style={{ 
                        maxHeight: listHeight,
                        overflowY: 'auto'
                    }}
                >
                    {filesToDisplay.map((file, index) => renderFilePreview(file, index))}
                </div>
            )}
        </div>
    );
});

InputFile.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    multiple: PropTypes.bool,
    helpText: PropTypes.string,
    accept: PropTypes.string,
    errorText: PropTypes.string,
    disabled: PropTypes.bool,
    maxFiles: PropTypes.number,
    maxSize: PropTypes.number,
    className: PropTypes.string,
    icon: PropTypes.elementType,
    dropzoneText: PropTypes.string,
    listHeight: PropTypes.string, // altura de la lista de archivos
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object)
    ]),
    form: PropTypes.object // react-hook-form object
};

export default InputFile;
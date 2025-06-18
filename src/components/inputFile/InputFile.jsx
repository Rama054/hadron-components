import { useState } from 'react';
import '../../css/InputFile.css';
import * as LuIcons from "react-icons/lu";
import { PiTrash, PiUploadSimple } from 'react-icons/pi';
import Button from '../button/Button';
import PropTypes from 'prop-types';

export default function InputFile({ 
    label, 
    name, 
    id, 
    multiple = false, 
    helpText, 
    errorText, 
    accept, 
    disabled = false,
    maxFiles = null,
    maxSize = null, // in bytes
    className,
    onFilesChange,
    ...props 
}) {
    const [files, setFiles] = useState([]);
    const [dragActive, setDragActive] = useState(false);

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

    const validateFiles = (fileList) => {
        const validFiles = [];
        const errors = [];

        Array.from(fileList).forEach(file => {
            // Check file size
            if (maxSize && file.size > maxSize) {
                errors.push(`${file.name} exceeds maximum size of ${formatSize(maxSize)}`);
                return;
            }

            // Check file count
            if (maxFiles && files.length + validFiles.length >= maxFiles) {
                errors.push(`Maximum ${maxFiles} files allowed`);
                return;
            }

            validFiles.push({
                id: Math.random().toString(36).substr(2, 9),
                type: file.type.split('/')[0],
                extension: file.name.split('.').pop().toLowerCase(),
                url: URL.createObjectURL(file),
                size: formatSize(file.size),
                name: file.name,
                file
            });
        });

        return { validFiles, errors };
    };

    const handleFiles = (fileList) => {
        const { validFiles, errors } = validateFiles(fileList);
        
        if (errors.length > 0) {
            console.warn('File validation errors:', errors);
            // You could show these errors in your UI
        }

        const newFiles = multiple ? [...files, ...validFiles] : validFiles;
        setFiles(newFiles);
        
        if (onFilesChange) {
            onFilesChange(newFiles.map(f => f.file));
        }
    };

    const handleFileInput = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files.length > 0) {
            handleFiles(e.target.files);
        }
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
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
        
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFiles(e.dataTransfer.files);
        }
    };

    const handleFileRemove = (fileId) => {
        const updatedFiles = files.filter(file => file.id !== fileId);
        setFiles(updatedFiles);
        
        if (onFilesChange) {
            onFilesChange(updatedFiles.map(f => f.file));
        }
    };

    const uniqueId = id || `file-input-${Math.random().toString(36).substr(2, 9)}`;

    let containerClass = "q-input-file-root";
    if (className) containerClass += ` ${className}`;

    return (
        <div className={containerClass}>
            {label && (
                <label className="q-input-file-label" htmlFor={uniqueId}>
                    {label}
                </label>
            )}
            
            <div 
                className={`q-input-file-dropzone ${dragActive ? 'q-dropzone-active' : ''} ${disabled ? 'q-dropzone-disabled' : ''}`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <label htmlFor={uniqueId} className="q-dropzone-label">
                    <div className="q-dropzone-content">
                        <PiUploadSimple size={32} className="q-dropzone-icon" />
                        <div className="q-dropzone-text">
                            <p className="q-dropzone-primary">
                                Drop files here or <span className="q-dropzone-link">click to browse</span>
                            </p>
                            <p className="q-dropzone-secondary">
                                {accept && `Supported formats: ${accept}`}
                                {maxSize && ` • Max size: ${formatSize(maxSize)}`}
                                {maxFiles && ` • Max files: ${maxFiles}`}
                            </p>
                        </div>
                    </div>
                    <input
                        type="file"
                        id={uniqueId}
                        name={name}
                        accept={accept}
                        multiple={multiple}
                        disabled={disabled}
                        onChange={handleFileInput}
                        className="q-file-input"
                        {...props}
                    />
                </label>
            </div>

            {helpText && <p className="q-input-help-text">{helpText}</p>}
            {errorText && <p className="q-input-error-text">{errorText}</p>}

            {files.length > 0 && (
                <div className="q-files-summary">
                    <span className="q-files-count">{files.length} file{files.length !== 1 ? 's' : ''} selected</span>
                </div>
            )}

            {files.length > 0 && (
                <div className="q-files-preview">
                    {files.map((file) => (
                        <div key={file.id} className="q-file-item">
                            <div className="q-file-preview">
                                {file.type === 'image' ? (
                                    <img 
                                        src={file.url} 
                                        alt={file.name}
                                        className="q-file-image"
                                    />
                                ) : (
                                    <div className="q-file-icon-container">
                                        <FileIcon type={file.extension} />
                                    </div>
                                )}
                            </div>
                            <div className="q-file-info">
                                <div className="q-file-details">
                                    <span className="q-file-name" title={file.name}>
                                        {file.name}
                                    </span>
                                    <span className="q-file-size">{file.size}</span>
                                </div>
                                <Button 
                                    variant="ghost" 
                                    size="sm"
                                    color="danger" 
                                    onClick={() => handleFileRemove(file.id)}
                                    disabled={disabled}
                                >
                                    <PiTrash size={16} />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
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
        pdf: LuIcons.LuFile,
        default: LuIcons.LuFile
    };

    const typeMap = {
        image: ['image', 'png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'],
        video: ['video', 'mp4', 'avi', 'mov', 'wmv', 'flv', 'webm'],
        audio: ['audio', 'mp3', 'wav', 'flac', 'aac'],
        zip: ['zip', 'rar', 'tar', '7z', 'gz'],
        json: ['json'],
        txt: ['txt'],
        pdf: ['pdf'],
        code: ['js', 'html', 'css', 'yml', 'yaml', 'xml', 'sql', 'sh', 'php', 'py', 'java', 'c', 'cpp', 'cs', 'go', 'rb', 'swift', 'ts', 'jsx', 'tsx'],
        word: ['doc', 'docx'],
        xls: ['xls', 'xlsx', 'csv'],
    };

    const iconType = Object.keys(typeMap).find(key => typeMap[key].includes(type)) || 'default';
    const IconComponent = typeIcons[iconType];

    return <IconComponent size={24} />;
};

InputFile.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    multiple: PropTypes.bool,
    helpText: PropTypes.string,
    errorText: PropTypes.string,
    accept: PropTypes.string,
    disabled: PropTypes.bool,
    maxFiles: PropTypes.number,
    maxSize: PropTypes.number,
    className: PropTypes.string,
    onFilesChange: PropTypes.func
};

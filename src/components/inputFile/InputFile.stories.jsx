import '../../css/theme.css';
import InputFile from './InputFile';
import useThemeMode from '../../hooks/useThemeMode';

export default {
    title: "Components/InputFile",
    component: InputFile,
    argTypes: {
        multiple: {
            control: { type: 'boolean' }
        },
        disabled: {
            control: { type: 'boolean' }
        }
    }
};

export const Default = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px', maxWidth: '600px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Basic File Upload</h3>
                <InputFile 
                    label="Upload Document"
                    helpText="Select a file to upload"
                />
            </div>
        </div>
    )
}

export const Multiple = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px', maxWidth: '600px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Multiple Files</h3>
                <InputFile 
                    label="Upload Multiple Files"
                    multiple
                    helpText="You can select multiple files at once"
                />
            </div>
        </div>
    )
}

export const WithRestrictions = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px', maxWidth: '600px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>File Type Restrictions</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <InputFile 
                        label="Images Only"
                        accept="image/*"
                        multiple
                        helpText="Only image files are allowed"
                    />
                    
                    <InputFile 
                        label="Documents Only"
                        accept=".pdf,.doc,.docx,.txt"
                        helpText="PDF, Word documents, and text files only"
                    />
                    
                    <InputFile 
                        label="Spreadsheets"
                        accept=".xlsx,.xls,.csv"
                        helpText="Excel and CSV files only"
                    />
                </div>
            </div>
        </div>
    )
}

export const WithLimits = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px', maxWidth: '600px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>File Size and Count Limits</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <InputFile 
                        label="Max 5 Files"
                        multiple
                        maxFiles={5}
                        helpText="Maximum 5 files allowed"
                    />
                    
                    <InputFile 
                        label="Max 10MB per file"
                        multiple
                        maxSize={10 * 1024 * 1024} // 10MB
                        helpText="Each file must be smaller than 10MB"
                    />
                    
                    <InputFile 
                        label="Profile Picture"
                        accept="image/*"
                        maxSize={2 * 1024 * 1024} // 2MB
                        helpText="Upload a profile picture (max 2MB)"
                    />
                </div>
            </div>
        </div>
    )
}

export const States = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px', maxWidth: '600px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Different States</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <InputFile 
                        label="Normal State"
                        helpText="Drag and drop files or click to browse"
                    />
                    
                    <InputFile 
                        label="Disabled State"
                        disabled
                        helpText="This upload is currently disabled"
                    />
                    
                    <InputFile 
                        label="With Error"
                        errorText="File upload failed. Please try again."
                        helpText="There was an error uploading your file"
                    />
                </div>
            </div>
        </div>
    )
}

export const FormIntegration = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px', maxWidth: '600px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Project Submission Form</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <InputFile 
                        label="Project Documentation"
                        accept=".pdf,.doc,.docx"
                        multiple
                        maxFiles={3}
                        helpText="Upload project documentation (PDF or Word, max 3 files)"
                    />
                    
                    <InputFile 
                        label="Design Assets"
                        accept="image/*,.sketch,.fig,.ai"
                        multiple
                        maxSize={50 * 1024 * 1024} // 50MB
                        helpText="Upload design files (images, Sketch, Figma, etc.)"
                    />
                    
                    <InputFile 
                        label="Source Code Archive"
                        accept=".zip,.tar,.gz,.rar"
                        maxSize={100 * 1024 * 1024} // 100MB
                        helpText="Upload compressed source code (max 100MB)"
                    />
                </div>
            </div>
        </div>
    )
}

export const DashboardUploads = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px', maxWidth: '800px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Dashboard File Management</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                    <InputFile 
                        label="Bulk Data Import"
                        accept=".csv,.xlsx,.json"
                        multiple
                        maxFiles={10}
                        helpText="Import data files (CSV, Excel, JSON)"
                    />
                    
                    <InputFile 
                        label="User Avatars"
                        accept="image/*"
                        multiple
                        maxSize={5 * 1024 * 1024} // 5MB
                        helpText="Upload user profile pictures"
                    />
                    
                    <InputFile 
                        label="Report Templates"
                        accept=".html,.pdf,.docx"
                        multiple
                        helpText="Upload custom report templates"
                    />
                    
                    <InputFile 
                        label="System Backup"
                        accept=".zip,.tar,.gz"
                        maxSize={500 * 1024 * 1024} // 500MB
                        helpText="Upload system backup files"
                    />
                </div>
            </div>
        </div>
    )
}

export const WithCallback = () => {
    const { toggleTheme } = useThemeMode();

    const handleFilesChange = (files) => {
        console.log('Files changed:', files);
        // Here you would typically handle the files
        // e.g., upload to server, validate, etc.
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px', maxWidth: '600px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>With Change Callback</h3>
                <InputFile 
                    label="Files with Callback"
                    multiple
                    onFilesChange={handleFilesChange}
                    helpText="Check the console to see file changes"
                />
                <p style={{ fontSize: '0.875rem', color: 'var(--hadr-text-muted)' }}>
                    Open browser console to see the callback in action
                </p>
            </div>
        </div>
    )
}

export const Interactive = (args) => {
    return (
        <div style={{ padding: '24px', maxWidth: '600px' }}>
            <InputFile {...args} />
        </div>
    )
}

Interactive.args = {
    label: "Interactive File Upload",
    multiple: false,
    disabled: false,
    accept: "",
    helpText: "Upload your files here",
    errorText: "",
    maxFiles: null,
    maxSize: null
}

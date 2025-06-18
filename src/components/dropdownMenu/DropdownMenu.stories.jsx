import '../../css/theme.css';
import DropdownMenu from './DropdownMenu';
import Button from '../button/Button';
import Avatar from '../avatar/Avatar';
import useThemeMode from '../../hooks/useThemeMode';

export default {
    title: "Components/DropdownMenu",
    component: DropdownMenu.Root,
};

export const Default = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Basic Dropdown</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="outline">Open Menu</Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Label>Actions</DropdownMenu.Label>
                            <DropdownMenu.Item icon="📝">Edit</DropdownMenu.Item>
                            <DropdownMenu.Item icon="📋">Copy</DropdownMenu.Item>
                            <DropdownMenu.Item icon="🗑️" destructive>Delete</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button>Options</Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item icon="⚙️">Settings</DropdownMenu.Item>
                            <DropdownMenu.Item icon="👤">Profile</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item icon="🚪">Logout</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </div>
            </div>
        </div>
    )
}

export const Positioning = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Alignment Options</h3>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'flex-start' }}>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="outline">Align Start</Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content align="start">
                            <DropdownMenu.Item>Aligned to start</DropdownMenu.Item>
                            <DropdownMenu.Item>Second item</DropdownMenu.Item>
                            <DropdownMenu.Item>Third item</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="outline">Align Center</Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content align="center">
                            <DropdownMenu.Item>Centered alignment</DropdownMenu.Item>
                            <DropdownMenu.Item>Second item</DropdownMenu.Item>
                            <DropdownMenu.Item>Third item</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="outline">Align End</Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content align="end">
                            <DropdownMenu.Item>Aligned to end</DropdownMenu.Item>
                            <DropdownMenu.Item>Second item</DropdownMenu.Item>
                            <DropdownMenu.Item>Third item</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </div>
            </div>

            <div style={{ marginTop: '100px' }}>
                <h3>Side Positioning</h3>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="outline">Top Side</Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content side="top">
                            <DropdownMenu.Item>Opens above</DropdownMenu.Item>
                            <DropdownMenu.Item>Second item</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="outline">Right Side</Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content side="right">
                            <DropdownMenu.Item>Opens to right</DropdownMenu.Item>
                            <DropdownMenu.Item>Second item</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </div>
            </div>
        </div>
    )
}

export const WithIcons = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Menu with Icons</h3>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button variant="outline" rightIcon="▼">File</Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <DropdownMenu.Label>File Operations</DropdownMenu.Label>
                        <DropdownMenu.Item icon="📄">New File</DropdownMenu.Item>
                        <DropdownMenu.Item icon="📁">Open Folder</DropdownMenu.Item>
                        <DropdownMenu.Item icon="💾">Save</DropdownMenu.Item>
                        <DropdownMenu.Item icon="📤">Export</DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Label>Recent</DropdownMenu.Label>
                        <DropdownMenu.Item icon="📋">Document.pdf</DropdownMenu.Item>
                        <DropdownMenu.Item icon="📊">Spreadsheet.xlsx</DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item icon="🚪" destructive>Close Project</DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </div>
        </div>
    )
}

export const UserMenu = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>User Profile Menu</h3>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <div style={{ cursor: 'pointer' }}>
                            <Avatar 
                                src="https://i.pravatar.cc/250?u=user" 
                                alt="User Avatar" 
                                size="md" 
                                status="online"
                            />
                        </div>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content align="end">
                        <DropdownMenu.Label>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                <span style={{ fontWeight: 600 }}>John Doe</span>
                                <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>john@example.com</span>
                            </div>
                        </DropdownMenu.Label>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item icon="👤">Profile</DropdownMenu.Item>
                        <DropdownMenu.Item icon="⚙️">Settings</DropdownMenu.Item>
                        <DropdownMenu.Item icon="🛡️">Privacy</DropdownMenu.Item>
                        <DropdownMenu.Item icon="💳">Billing</DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item icon="❓">Help & Support</DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item icon="🚪" destructive>Sign out</DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </div>
        </div>
    )
}

export const DashboardActions = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Dashboard Context Menus</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    
                    {/* Table Row Actions */}
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="ghost" size="sm">⋯</Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Label>Row Actions</DropdownMenu.Label>
                            <DropdownMenu.Item icon="👁️">View Details</DropdownMenu.Item>
                            <DropdownMenu.Item icon="✏️">Edit</DropdownMenu.Item>
                            <DropdownMenu.Item icon="📋">Duplicate</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item icon="📤">Export</DropdownMenu.Item>
                            <DropdownMenu.Item icon="📧">Share</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item icon="🗑️" destructive>Delete</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    {/* Chart Options */}
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="outline" size="sm" rightIcon="▼">Chart Options</Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Label>View Options</DropdownMenu.Label>
                            <DropdownMenu.Item icon="📊">Bar Chart</DropdownMenu.Item>
                            <DropdownMenu.Item icon="📈">Line Chart</DropdownMenu.Item>
                            <DropdownMenu.Item icon="🥧">Pie Chart</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Label>Time Range</DropdownMenu.Label>
                            <DropdownMenu.Item icon="📅">Last 7 days</DropdownMenu.Item>
                            <DropdownMenu.Item icon="📅">Last 30 days</DropdownMenu.Item>
                            <DropdownMenu.Item icon="📅">Last 90 days</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item icon="💾">Save View</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    {/* Filter Menu */}
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="soft" size="sm" color="secondary" leftIcon="🔍">Filters</Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Label>Filter by Status</DropdownMenu.Label>
                            <DropdownMenu.Item icon="✅">Active</DropdownMenu.Item>
                            <DropdownMenu.Item icon="⏸️">Pending</DropdownMenu.Item>
                            <DropdownMenu.Item icon="❌">Inactive</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Label>Filter by Type</DropdownMenu.Label>
                            <DropdownMenu.Item icon="📁">Projects</DropdownMenu.Item>
                            <DropdownMenu.Item icon="✅">Tasks</DropdownMenu.Item>
                            <DropdownMenu.Item icon="👥">Teams</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item icon="🔄">Reset Filters</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </div>
            </div>
        </div>
    )
}

export const States = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Item States</h3>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="outline">Item States</Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Label>Menu Items</DropdownMenu.Label>
                            <DropdownMenu.Item icon="✅">Normal Item</DropdownMenu.Item>
                            <DropdownMenu.Item icon="⏸️" disabled>Disabled Item</DropdownMenu.Item>
                            <DropdownMenu.Item icon="⚠️" destructive>Destructive Item</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item icon="❌" destructive disabled>Disabled Destructive</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    <DropdownMenu.Root disabled>
                        <DropdownMenu.Trigger>
                            <Button variant="outline" disabled>Disabled Menu</Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item>This won't show</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </div>
            </div>
        </div>
    )
}

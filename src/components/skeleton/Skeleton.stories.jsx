import Skeleton from './Skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['rectangular', 'circular', 'text']
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full']
    }
  },
};

export const Default = {
  args: {
    width: '200px',
    height: '20px'
  }
};

export const Variants = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <div>
        <h4>Rectangular</h4>
        <Skeleton variant="rectangular" width="200px" height="100px" />
      </div>
      
      <div>
        <h4>Circular</h4>
        <Skeleton variant="circular" width="60px" height="60px" />
      </div>
      
      <div>
        <h4>Text</h4>
        <Skeleton variant="text" width="300px" />
      </div>
    </div>
  )
};

export const ProfileCard = {
  render: (args) => (
    <div style={{ 
      width: '300px', 
      padding: '1.5rem', 
      border: '1px solid #e2e8f0', 
      borderRadius: '12px',
      backgroundColor: 'white'
    }}>
      {/* Avatar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <Skeleton variant="circular" width="60px" height="60px" />
        <div style={{ flex: 1 }}>
          <Skeleton variant="text" width="120px" height="20px" style={{ marginBottom: '0.5rem' }} />
          <Skeleton variant="text" width="80px" height="16px" />
        </div>
      </div>
      
      {/* Content */}
      <div style={{ marginBottom: '1rem' }}>
        <Skeleton variant="text" width="100%" height="16px" style={{ marginBottom: '0.5rem' }} />
        <Skeleton variant="text" width="100%" height="16px" style={{ marginBottom: '0.5rem' }} />
        <Skeleton variant="text" width="60%" height="16px" />
      </div>
      
      {/* Actions */}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Skeleton variant="rectangular" width="80px" height="36px" radius="md" />
        <Skeleton variant="rectangular" width="80px" height="36px" radius="md" />
      </div>
    </div>
  )
};

export const ArticleList = {
  render: (args) => (
    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {[1, 2, 3].map((item) => (
        <div key={item} style={{ 
          display: 'flex', 
          gap: '1rem', 
          padding: '1rem', 
          border: '1px solid #e2e8f0', 
          borderRadius: '8px',
          backgroundColor: 'white'
        }}>
          {/* Image */}
          <Skeleton variant="rectangular" width="80px" height="80px" radius="md" />
          
          {/* Content */}
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" width="100%" height="18px" style={{ marginBottom: '0.5rem' }} />
            <Skeleton variant="text" width="100%" height="14px" style={{ marginBottom: '0.5rem' }} />
            <Skeleton variant="text" width="70%" height="14px" style={{ marginBottom: '1rem' }} />
            <Skeleton variant="text" width="50px" height="12px" />
          </div>
        </div>
      ))}
    </div>
  )
};

export const Dashboard = {
  render: (args) => (
    <div style={{ width: '600px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Skeleton variant="text" width="200px" height="32px" />
        <Skeleton variant="rectangular" width="120px" height="40px" radius="md" />
      </div>
      
      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {[1, 2, 3].map((item) => (
          <div key={item} style={{ 
            padding: '1.5rem', 
            border: '1px solid #e2e8f0', 
            borderRadius: '12px',
            backgroundColor: 'white'
          }}>
            <Skeleton variant="text" width="60%" height="16px" style={{ marginBottom: '0.5rem' }} />
            <Skeleton variant="text" width="80px" height="28px" style={{ marginBottom: '0.5rem' }} />
            <Skeleton variant="text" width="40%" height="14px" />
          </div>
        ))}
      </div>
      
      {/* Chart */}
      <div style={{ 
        padding: '1.5rem', 
        border: '1px solid #e2e8f0', 
        borderRadius: '12px',
        backgroundColor: 'white'
      }}>
        <Skeleton variant="text" width="150px" height="20px" style={{ marginBottom: '1rem' }} />
        <Skeleton variant="rectangular" width="100%" height="200px" radius="md" />
      </div>
    </div>
  )
};

export const Table = {
  render: (args) => (
    <div style={{ width: '500px' }}>
      <div style={{ 
        padding: '1rem', 
        border: '1px solid #e2e8f0', 
        borderRadius: '8px',
        backgroundColor: 'white'
      }}>
        {/* Table Header */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr 1fr 80px', 
          gap: '1rem', 
          padding: '0.75rem 0',
          borderBottom: '1px solid #e2e8f0',
          marginBottom: '1rem'
        }}>
          <Skeleton variant="text" width="60px" height="16px" />
          <Skeleton variant="text" width="80px" height="16px" />
          <Skeleton variant="text" width="70px" height="16px" />
          <Skeleton variant="text" width="60px" height="16px" />
        </div>
        
        {/* Table Rows */}
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr 1fr 80px', 
            gap: '1rem', 
            padding: '0.75rem 0',
            alignItems: 'center'
          }}>
            <Skeleton variant="text" width="90%" height="16px" />
            <Skeleton variant="text" width="70%" height="16px" />
            <Skeleton variant="text" width="60%" height="16px" />
            <Skeleton variant="rectangular" width="60px" height="24px" radius="sm" />
          </div>
        ))}
      </div>
    </div>
  )
};

export const UtilityClasses = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <div>
        <h4>Avatar</h4>
        <Skeleton className="q-skeleton-avatar" />
      </div>
      
      <div>
        <h4>Title</h4>
        <Skeleton className="q-skeleton-title" />
      </div>
      
      <div>
        <h4>Text Lines</h4>
        <Skeleton className="q-skeleton-text" />
        <Skeleton className="q-skeleton-text" />
        <Skeleton className="q-skeleton-text" />
      </div>
      
      <div>
        <h4>Button</h4>
        <Skeleton className="q-skeleton-button" />
      </div>
      
      <div>
        <h4>Card</h4>
        <Skeleton className="q-skeleton-card" />
      </div>
    </div>
  )
};

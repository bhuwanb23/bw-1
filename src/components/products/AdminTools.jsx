import { useState } from 'react'

const AdminTools = () => {
  const [isAdmin, setIsAdmin] = useState(true) // Changed to true to make it visible by default
  const [activeTab, setActiveTab] = useState('analytics')

  // Mock data for admin tools
  const analyticsData = {
    totalUsers: '12,482',
    activeUsers: '8,341',
    revenue: '$245,680',
    conversionRate: '4.8%'
  }

  const recentActivity = [
    { id: 1, user: 'Alex Johnson', action: 'Created new project', time: '2 min ago' },
    { id: 2, user: 'Sam Wilson', action: 'Updated API settings', time: '15 min ago' },
    { id: 3, user: 'Taylor Reed', action: 'Downloaded SDK', time: '1 hour ago' },
    { id: 4, user: 'Jordan Lee', action: 'Submitted support ticket', time: '3 hours ago' }
  ]

  if (!isAdmin) {
    return null
  }

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span>Admin Dashboard</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Administrative <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Tools</span>
        </h2>
        
        <div className="bg-gradient-to-br from-black/40 to-black/30 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-white/10 flex">
            {['analytics', 'activity', 'settings'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-4 text-sm font-medium capitalize transition-colors duration-300 ${
                  activeTab === tab
                    ? 'text-white border-b-2 border-purple-500'
                    : 'text-white/70 hover:text-white'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'analytics' && (
              <div>
                <h3 className="text-xl font-bold text-white mb-6">System Analytics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {Object.entries(analyticsData).map(([key, value]) => (
                    <div key={key} className="bg-black/30 rounded-xl p-5 border border-white/10">
                      <div className="text-white/70 text-sm capitalize mb-1">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="text-2xl font-bold text-white">{value}</div>
                    </div>
                  ))}
                </div>
                
                <div className="h-64 bg-black/30 rounded-xl border border-white/10 flex items-center justify-center">
                  <div className="text-white/50">Analytics Chart Visualization</div>
                </div>
              </div>
            )}
            
            {activeTab === 'activity' && (
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-white/10">
                      <div>
                        <div className="font-medium text-white">{activity.user}</div>
                        <div className="text-white/70 text-sm">{activity.action}</div>
                      </div>
                      <div className="text-white/50 text-sm">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div>
                <h3 className="text-xl font-bold text-white mb-6">System Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-black/30 rounded-xl p-5 border border-white/10">
                    <h4 className="font-bold text-white mb-3">API Configuration</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-white/70">Rate Limiting</span>
                        <div className="w-12 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative">
                          <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/70">CORS Enabled</span>
                        <div className="w-12 h-6 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full relative">
                          <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/30 rounded-xl p-5 border border-white/10">
                    <h4 className="font-bold text-white mb-3">Maintenance</h4>
                    <div className="space-y-3">
                      <button className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-300">
                        Run System Check
                      </button>
                      <button className="w-full py-2 px-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-300">
                        Clear Cache
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminTools
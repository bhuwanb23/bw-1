import { useState } from 'react'

const MeetingScheduler = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState('')
  const [isScheduled, setIsScheduled] = useState(false)

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ]

  const today = new Date()
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date()
    date.setDate(today.getDate() + i)
    return date
  })

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      setIsScheduled(true)
      // Reset after 5 seconds
      setTimeout(() => {
        setIsScheduled(false)
        setIsOpen(false)
        setSelectedDate(null)
        setSelectedTime('')
      }, 5000)
    }
  }

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Schedule a <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Meeting</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Book a call with our team to discuss your project in detail
          </p>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule a Call
          </button>
        </div>
        
        {/* Scheduler Modal */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
            
            <div className="relative bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl border border-white/20 rounded-3xl w-full max-w-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.1)_0%,rgba(0,0,0,0)_70%)]"></div>
              
              <div className="relative p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">Schedule a Meeting</h3>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
                  >
                    <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {isScheduled ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Meeting Scheduled!</h4>
                    <p className="text-white/70 mb-6">
                      Your meeting has been scheduled for {selectedDate?.toLocaleDateString()} at {selectedTime}.
                      A calendar invite has been sent to your email.
                    </p>
                    <button
                      onClick={() => {
                        setIsScheduled(false)
                        setIsOpen(false)
                      }}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4">Select a Date</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {dates.map((date, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedDate(date)}
                            className={`p-3 rounded-xl border transition-all duration-300 ${
                              selectedDate?.toDateString() === date.toDateString()
                                ? 'border-blue-500 bg-blue-500/20'
                                : 'border-white/10 bg-black/20 hover:border-white/20'
                            }`}
                          >
                            <div className="text-white/80 text-sm">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                            <div className="text-white font-bold">{date.getDate()}</div>
                            <div className="text-white/60 text-xs">{date.toLocaleDateString('en-US', { month: 'short' })}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {selectedDate && (
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4">Select a Time</h4>
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                          {timeSlots.map((time, index) => (
                            <button
                              key={index}
                              onClick={() => setSelectedTime(time)}
                              className={`p-3 rounded-xl border transition-all duration-300 ${
                                selectedTime === time
                                  ? 'border-purple-500 bg-purple-500/20'
                                  : 'border-white/10 bg-black/20 hover:border-white/20'
                              }`}
                            >
                              <div className="text-white font-medium">{time}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {selectedDate && selectedTime && (
                      <div className="pt-4">
                        <button
                          onClick={handleSchedule}
                          className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-2xl"
                        >
                          Confirm Meeting
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default MeetingScheduler
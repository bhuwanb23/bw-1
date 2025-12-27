import Spline from '@splinetool/react-spline'

const SplineBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-screen w-screen overflow-hidden">
      {/* Animated gradient overlay to optimize and blend Spline background */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Animated radial gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-transparent blur-3xl animate-gradient-shift"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-tl from-purple-500/20 via-pink-500/15 to-transparent blur-3xl animate-gradient-shift-reverse"></div>
        
        {/* Animated gradient mesh overlay */}
        <div className="absolute inset-0 animate-gradient-mesh" style={{
          background: 'radial-gradient(ellipse at top left, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(168, 85, 247, 0.1) 0%, transparent 50%)'
        }}></div>
        
        {/* Subtle animated color transitions */}
        <div className="absolute inset-0 opacity-30 animate-color-sweep" style={{
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, transparent 25%, transparent 75%, rgba(168, 85, 247, 0.05) 100%)',
          backgroundSize: '200% 200%'
        }}></div>
      </div>

      <div className="absolute inset-0 h-full w-full z-0">
        <Spline 
          scene="https://prod.spline.design/FaQEP80NptnQJ9yr/scene.splinecode"
          style={{ 
            width: '110%', 
            height: '110%',
            position: 'absolute',
            top: '-5%',
            left: '-5%'
          }}
        />
      </div>
      
      {/* Overlay to hide any remaining watermark elements */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        <div className="absolute bottom-0 right-0 w-40 h-16 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-16 h-40 bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </div>
  )
}

export default SplineBackground
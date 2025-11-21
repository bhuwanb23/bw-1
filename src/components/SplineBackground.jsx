import Spline from '@splinetool/react-spline'

const SplineBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <Spline 
          scene="https://prod.spline.design/sAci4Y5e9gpep3QS/scene.splinecode"
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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-40 h-16 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-16 h-40 bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </div>
  )
}

export default SplineBackground
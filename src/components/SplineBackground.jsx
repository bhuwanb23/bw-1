import Spline from '@splinetool/react-spline'

const SplineBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-screen w-screen">
      <div className="absolute inset-0 h-full w-full">
        <Spline 
          scene="https://prod.spline.design/sAci4Y5e9gpep3QS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  )
}

export default SplineBackground


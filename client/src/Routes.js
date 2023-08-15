
import { Routes, Route } from 'react-router-dom'
import PlayDetail from './Components/PlayDetailComponent/component/PlayDetail'
import Play from './Components/PlayComponent/component/Play'
import PageNotFound from './Page/PageNotFound'


function RoutesComp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Play />} />
        <Route path="/play-detail/:videoId" element={<PlayDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default RoutesComp
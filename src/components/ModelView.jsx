import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import Lights from "./Lights"
import IPhone from "./IPhone"
import { Suspense } from "react"

const ModelView = ( { index, groupRef, gsapType, controlRef, setRotationSize, size, item}) => {
    return (
        <View
            index={index}
            id={gsapType}
            className={`w-full h-full ${index === 2} ? 'right-[-100%] : ''`}
            >
                {/*Ambient Light*/}
                <ambientLight intensity={0.3}/>

                <PerspectiveCamera makeDefault position ={[0, 0, 4]}/>

                <Lights/>

                <OrbitControls />

                <group ref={groupRef} name={`${index === 1 }`}> 
                    <Suspense fallback={<div>Loading</div>}>
                        <IPhone />
                    </Suspense> 
                </group>    
        </View>
    )
}
export default ModelView
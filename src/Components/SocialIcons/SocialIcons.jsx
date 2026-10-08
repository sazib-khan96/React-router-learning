import React from 'react';
import { Link,GlobeCode} from 'lucide-react';
const SocialIcons = () => {
    return (
        <div className='mt-5'>
            <ul className='flex gap-2 items-center cursor-pointer'>{<Link  className='w-5 h-5'/>} Facebook</ul>
            <ul className='flex gap-2 items-center cursor-pointer'>{<GlobeCode  className='w-5 h-5'/>} GlobeCode</ul>
        </div>
    );
};

export default SocialIcons;
<GlobeCode />
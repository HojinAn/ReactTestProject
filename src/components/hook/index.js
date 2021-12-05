import { useEffect, useState } from "react";

const Hook = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);

    console.log('before useEffect')

    useEffect(() => {
        console.log('called');
    }, [isLoading]);

    console.log('after useEffect')

    return (
        <div>
            <div>{isLoading ? '로딩중' : '로딩 완료'}</div>
            <div>{isLoading2 ? '로딩중' : '로딩 완료'}</div>
            <button onClick={() => setIsLoading(!isLoading)}>로딩 버튼</button>
            <button onClick={() => setIsLoading2(!isLoading2)}>로딩 버튼2</button>
        </div>
    )
}

export default Hook;
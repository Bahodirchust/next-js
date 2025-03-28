"use client";

import useUserStore from "../../store/userStore";
import React, {useEffect} from "react";

const FetchData = () => {
    const { user, FetchUsers } = useUserStore();

    useEffect(() => {
        FetchUsers();
    }, []);

    return (
        <div>
            {user?.map((user, index) => {
                return (
                    <div key={index}>
                            <h3>{user.name}</h3>
                     </div>
                    );
})}
        </div>
    );
}

export default FetchData;
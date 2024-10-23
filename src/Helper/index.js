

export const redirectPageDetails=(isStorageKey,data,path,navigate)=>
    {
        localStorage.setItem(isStorageKey,JSON.stringify(data));
        navigate(path);
}











// jewdhe arguments pathvle tewdhe parameter pahijetch 
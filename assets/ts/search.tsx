/**
 * 记得把window.addEventListener('load' ...这部分代码注释掉
 * 初始化工作交给Stack.init()处理了，不需要这个了
 */  
...
function searchInit() {
    let search = document.querySelector('.search-result');
    if (search) {
        const searchForm = document.querySelector('.search-form') as HTMLFormElement,
            searchInput = searchForm.querySelector('input') as HTMLInputElement,
            searchResultList = document.querySelector('.search-result--list') as HTMLDivElement,
            searchResultTitle = document.querySelector('.search-result--title') as HTMLHeadingElement;

        new Search({
            form: searchForm,
            input: searchInput,
            list: searchResultList,
            resultTitle: searchResultTitle,
            resultTitleTemplate: window.searchResultTitleTemplate
        });
    }
}

export {
    searchInit
}

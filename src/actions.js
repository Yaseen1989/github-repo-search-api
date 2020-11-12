export const t = {
    LOAD_REPO_DATA: 'LOAD_REPO_DATA',
    LOAD_REPO_DATA_SUCCESS: 'LOAD_REPO_DATA_SUCCESS',
    RESET_REPO_DATA: 'RESET_REPO_DATA'
};

export const actions = ({
    loadRepoData: name => ({
        type: t.LOAD_REPO_DATA,
        name
    }),

    loadRepoDataSuccess: data => ({
        type: t.LOAD_REPO_DATA_SUCCESS,
        data
    }),
    resetRepoData: () => ({
        type: t.RESET_REPO_DATA,
        data: []
    })
});
import { api } from './api.ts'


export const fileApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getFile: builder.query<
            {},
            void
        >({
            query: () => "/file",
            providesTags: ["File"],
        }),

        createFile: builder.mutation<
            void,
            { file_name: string }
        >({
            query: (body) => ({
                url: "/file/create",
                method: "POST",
                body,
            }),
            invalidatesTags: ["File"],
        }),
    }),
    overrideExisting: false,
})




export const {
    useGetFileQuery,
    useCreateFileMutation
} = fileApi;
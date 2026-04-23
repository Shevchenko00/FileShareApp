import { api } from './api.ts'


export const pasteApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPaste: builder.query<
            {},
            void
        >({
            query: () => "/paste",
            providesTags: ["Paste"],
        }),

        createPaste: builder.mutation<
            void,
            { title: string, text: string }
        >({
            query: (body) => ({
                url: "/paste/create",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Paste"],
        }),
    }),
    overrideExisting: false,
})




export const {
    useGetPasteQuery,
    useCreatePasteMutation
} = pasteApi;
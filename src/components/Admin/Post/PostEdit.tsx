import {
    Edit,
    SimpleForm,
    TextInput,
    DateInput,
    required,
    ImageInput,
    ImageField,
    useNotify,
    useRedirect,
    useDataProvider,
    useGetRecordId,
    useGetOne
} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
import { supabaseClient } from '../../../utils/supabase';

export const PostEdit = () => {
    const notify = useNotify();
    const redirect = useRedirect();
    const dataProvider = useDataProvider();
    const recordId = useGetRecordId();

    // fetch the previous values with useGetOne
    const { data: previousValues, isLoading } = useGetOne('posts', { id: recordId });

    const handleSave = async (values: any) => {
        try {} // START HERE
        catch (error: any) {
            notify(`Error: ${error.message}`, { type: 'warning' });
        }
    };
    
};
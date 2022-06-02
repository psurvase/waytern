import { useForm } from "react-hook-form";
import Router from "next/router";
import { useRouter } from 'next/router'

const UserDetailComponent = ({ user }) => {
    const router = useRouter()


    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: user.name,
        }
    });

    const onSubmit = async (data) => {
        // console.log("Getiing data for user page ", data)
        try {
            const body = { name: data.name };
            await fetch('/api/user/' + user.id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            await router.push('/user');
        } catch (error) {
            console.error(error);
        }
    };
    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="John Deo" {...register("name", { required: true })} />
            {errors.name && <span>This field is required</span>}
            <input type="submit" />
        </form>
    </>)
}
export default UserDetailComponent;

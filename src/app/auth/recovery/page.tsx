import RecoveryPassword from '@/features/RecoveryPassword/RecoveryPassword'
import RecoveryPasswordEmail from '@/features/RecoveryPassword/RecoveryPasswordEmail'

export default async function RecoveryPasswordPage({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | undefined }>
}) {
	const params = await searchParams

	const email = params.email;
	const token = params.token;

	return (
		<div>
			{
				email === undefined ||  token === undefined ? (
					<RecoveryPasswordEmail/>
				) : (
					<RecoveryPassword email={email} token={token}/>
				)
			}
			
		</div>
	);
}

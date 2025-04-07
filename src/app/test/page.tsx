import EditProfile from '@/features/EditProfile/EditProfile'
import { getProfileData } from '@/shared/api/user'
import { UserProfileDTO } from '@/shared/types/user'
import { Section } from '@/shared/ui'

export default async function Test() {
	const generalProfileData: UserProfileDTO = await getProfileData();
	return (
		<Section>
			<h2>Test</h2>
			<EditProfile data={generalProfileData}/>
		</Section>
	)
}
import type { AsyncStateRetry } from 'react-use/lib/useAsyncRetry.js'
import type { NonFungibleTokenEvent, Pageable } from '@masknet/web3-shared-base'
import type { Web3Helper } from '@masknet/web3-helpers'
import { CollectibleCard } from '../CollectibleCard.js'
import { ActivitiesList } from '../../Shared/ActivitiesList.js'

export interface ActivitiesTabProps {
    events: AsyncStateRetry<Pageable<NonFungibleTokenEvent<Web3Helper.ChainIdAll, Web3Helper.SchemaTypeAll>>>
}

export function ActivitiesTab(props: ActivitiesTabProps) {
    return (
        <CollectibleCard>
            <ActivitiesList events={props.events} />
        </CollectibleCard>
    )
}

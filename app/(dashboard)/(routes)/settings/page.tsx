import { Heading } from '@/components/heading'
import { SubscriptionButton } from '@/components/subscription-button'
import { checkSubscription } from '@/lib/subscription'
import { Settings } from 'lucide-react'
import React from 'react'

const SettingsPage = async() => {
     const isPro= await checkSubscription()
  return (
    <div>
      <Heading title='Settings' description='Manage Account settings' icon={Settings} iconColor='text-grey-700' bgColor='bg-gray-700/10'/>
      <div className='space-y-4 pl-4'>
        <div >
          {isPro? "You are currently on a pro plan":"You are currently on a free plan"}
        </div>
        <SubscriptionButton isPro={isPro}/>
      </div>
    </div>
  )
}

export default SettingsPage

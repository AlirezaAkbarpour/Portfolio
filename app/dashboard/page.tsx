'use client'
import { getSession, SessionProvider } from 'next-auth/react'
import DashboardPage from './components/dashboard'

export default function Page() {
  return (
    <SessionProvider refetchOnWindowFocus={false} refetchWhenOffline={false}>
        <DashboardPage/>
    </SessionProvider>
  )
}

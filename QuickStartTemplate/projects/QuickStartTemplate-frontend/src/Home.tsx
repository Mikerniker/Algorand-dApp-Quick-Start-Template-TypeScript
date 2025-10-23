// Home.tsx
// Redesigned Landing Page — Modern Verdant Neumorphic Style (TailwindCSS)

import React, { useState } from 'react'
import { useWallet } from '@txnlab/use-wallet-react'
import { AiOutlineWallet, AiOutlineSend, AiOutlineStar, AiOutlineDeploymentUnit } from 'react-icons/ai'
import { BsArrowUpRightCircle, BsWallet2 } from 'react-icons/bs'

// Frontend modals
import ConnectWallet from './components/ConnectWallet'
import Transact from './components/Transact'
import NFTmint from './components/NFTmint'
import Tokenmint from './components/Tokenmint'

// Smart contract demo modal (backend app calls)
import AppCalls from './components/AppCalls'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false)
  const [openMintModal, setOpenMintModal] = useState<boolean>(false)
  const [openTokenModal, setOpenTokenModal] = useState<boolean>(false)
  const [openAppCallsModal, setOpenAppCallsModal] = useState<boolean>(false)

  const { activeAddress } = useWallet()

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-800 text-gray-100 flex flex-col font-sans">
      {/* ---------------- Navbar ---------------- */}
      <nav className="w-full backdrop-blur-md bg-emerald-900/30 border-b border-emerald-700 px-6 py-4 flex items-center justify-between shadow-[inset_1px_1px_2px_rgba(255,255,255,0.1),inset_-2px_-2px_4px_rgba(0,0,0,0.3)]">
        <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-400 to-green-500 tracking-tight">
          Algorand dApp Gateway
        </h1>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-800 text-emerald-100 font-semibold shadow-[4px_4px_10px_rgba(0,0,0,0.4),-4px_-4px_10px_rgba(255,255,255,0.05)] hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.05)] transition-all"
          onClick={() => setOpenWalletModal(true)}
        >
          <BsWallet2 className="text-lg text-emerald-300" />
          <span>{activeAddress ? 'Wallet Connected' : 'Connect Wallet'}</span>
        </button>
      </nav>

        {/* ---------------- Hero Section ---------------- */}
      <header className="flex flex-col items-center text-center py-20 px-6">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-400 drop-shadow-lg mb-6">
          Build. Explore. Grow. 🌿
        </h2>
        <p className="text-emerald-100/80 max-w-2xl text-lg mb-8 leading-relaxed">
          Discover how Algorand empowers sustainable innovation — connect your wallet, mint NFTs, and create tokens
          on the most energy-efficient blockchain.
        </p>
        <button
          onClick={() => setOpenWalletModal(true)}
          className="px-8 py-3 rounded-2xl font-bold text-lg text-emerald-950 bg-gradient-to-r from-emerald-300 to-teal-300 shadow-[8px_8px_16px_rgba(0,0,0,0.4),-4px_-4px_16px_rgba(255,255,255,0.1)] hover:scale-105 hover:shadow-[inset_4px_4px_12px_rgba(0,0,0,0.3),inset_-4px_-4px_12px_rgba(255,255,255,0.05)] transition-all"
        >
          {activeAddress ? 'Explore Features' : 'Connect Wallet to Begin'}
        </button>
      </header>

      {/* ---------------- Features Grid ---------------- */}
      <main className="flex-1 px-6 pb-16">
        {activeAddress ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Send Payment */}
            <div className="p-8 rounded-3xl bg-emerald-900/40 shadow-[8px_8px_16px_rgba(0,0,0,0.5),-4px_-4px_16px_rgba(255,255,255,0.05)] hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.05)] transition-all">
              <AiOutlineSend className="text-5xl mb-4 text-emerald-300" />
              <h3 className="text-2xl font-semibold mb-2">Send Payment</h3>
              <p className="text-emerald-100/70 mb-6">
                Send 1 ALGO to any address on TestNet to experience seamless transactions.
              </p>
              <button
                className="w-full py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-semibold shadow-[2px_2px_8px_rgba(0,0,0,0.4)] transition"
                onClick={() => setOpenPaymentModal(true)}
              >
                Open
              </button>
            </div>

import React from 'react'
import { useAppSelector } from '../app/hooks'
import { getFormValues } from '../templates/Form/formSlice'
import toast, { Toaster } from 'react-hot-toast'

const CopyButton: React.FC = () => {

  const state = useAppSelector(getFormValues)

  const copySuccess = () => toast.success('Copied to clipboard!', { position: 'bottom-center'});

  const copyToClipboard = (str: string) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      copySuccess()
      return navigator.clipboard.writeText(str);
    }
    return Promise.reject('The Clipboard API is not available.');
  };

  return (
    <>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center text-center"
        onClick={() => copyToClipboard(state.password)}>
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(1 1)"><rect width="13" height="13" x="7" y="7" rx="2" /><path d="M3 13H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></g></svg>
        <span>Copy</span>
      </button>
      <Toaster />
    </>
  )
}

export default CopyButton
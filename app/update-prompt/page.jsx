"use client";
import {useEffect, useState} from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Form from '@components/Form'

const EditPrompt = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
    prompt: '',
    tag: ''
  })
  const postID = searchParams.get('id')
  const updatePrompt = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    if (!postID) return alert('Prompt ID not found')

    try {
      const response = await fetch(`/api/prompt/${postID}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag
        })
      })
      if (response.ok) {
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${postID}`)
      const data = await response.json()
      setPost({
        prompt: data.prompt,
        tag: data.tag
      })
    }
    if (searchParams.get('id')) getPromptDetails()
  }, [postID])

  return (
    <Form type="Edit" post={post} setPost={setPost} submitting={submitting} handleSubmit={updatePrompt}/>
  )
}
export default EditPrompt
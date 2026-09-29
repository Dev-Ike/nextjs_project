"use client";

import { FormField } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { addProductAction } from "@/lib/products/product-action";
import { Loader2Icon, SparklesIcon } from "lucide-react";
import { useActionState } from "react";

const initialState = {
  success: false,
  errors: {},
  message: "",
};

export default function ProductSubmitForm() {
  const [state, formAction, isPending] = useActionState(
    addProductAction,
    initialState,
  );

  console.log(state);

  return (
    <form className='space-y-6' action={formAction}>
      <FormField
        label='Product Name'
        name='name'
        id='name'
        placeholder='My Awesome Product'
        required
        onChange={() => {}}
        error=''
      />
      <FormField
        label='Slug'
        name='slug'
        id='slug'
        placeholder='my-awesome-product'
        required
        onChange={() => {}}
        error=''
        helperText='URL-friendly version of your product name'
      />

      <FormField
        label='Tagline'
        name='tagline'
        id='tagline'
        placeholder='A brief, catchy description'
        required
        onChange={() => {}}
        error=''
      />

      <FormField
        label='Description'
        name='description'
        id='description'
        placeholder='Tell us more about your product...'
        required
        onChange={() => {}}
        error=''
        textarea
      />

      <FormField
        label='Website URL'
        name='websiteUrl'
        id='websiteUrl'
        placeholder='https://yourproduct.com'
        required
        onChange={() => {}}
        error=''
        helperText="Enter your product's website or landing page"
      />
      <FormField
        label='Tags'
        name='tags'
        id='tags'
        placeholder='AI, Productivity, Saas'
        required
        onChange={() => {}}
        error=''
        helperText='Comma-seperated tags (e.g., AI, Saas, Productivity)'
      />

      <Button type='submit' size='lg' className='w-full'>
        {isPending ? (
          <Loader2Icon className='size-4 animate-spin' />
        ) : (
          <>
            <SparklesIcon className='size-4' />
            Submit Product
          </>
        )}
      </Button>
    </form>
  );
}

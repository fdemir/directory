"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submit } from "../actions";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitSchema } from "../schema";
import { Category } from "@/db/schema/category";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SubmitFormProps = {
  categories: Category[];
};

export function SubmitForm({ categories }: SubmitFormProps) {
  const form = useForm<z.infer<typeof submitSchema>>({
    resolver: zodResolver(submitSchema),
  });

  async function onSubmit(values: z.infer<typeof submitSchema>) {
    const formData = new FormData();

    // FIXME: better handle fields
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("url", values.url);
    formData.append("short_desc", values.short_desc);
    formData.append("category_id", values.category_id);
    formData.append("logo", values.logo);

    await submit(formData);

    form.reset({
      name: "",
      description: "",
      url: "",
      short_desc: "",
      category_id: "",
      logo: undefined,
    });

    // TODO: toast or smth
    alert("Submitted.");
  }

  return (
    <div className="container py-5 max-w-[550px]">
      <h1 className="text-4xl font-semibold mb-4">Submit</h1>
      <p>Submit your thing</p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="my-4 flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="logo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Logo</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    multiple={false}
                    {...field}
                    value={undefined}
                    onChange={(event) => {
                      field.onChange(event?.target?.files?.[0]);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="short_desc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Short Desciption</FormLabel>
                <FormControl>
                  <Input placeholder="One sentence description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Explain what this app does"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL</FormLabel>
                <FormControl>
                  <Input placeholder="URL" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem
                          key={category.id}
                          value={String(category.id)}
                        >
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={form.formState.isSubmitting}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

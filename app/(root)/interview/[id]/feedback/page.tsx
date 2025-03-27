import { getCurrentUser } from "@/lib/actions/auth.action";
import { GetFeedbackByInterviewId, getInterViewsById } from "@/lib/actions/general.action";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: RouteParams) => {
  const { id } = await params;
  const user = await getCurrentUser();
  const interview = await getInterViewsById(id);
  if (!interview) redirect("/");
  const feedback = await GetFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!
  })

  console.log(feedback)
  return <div>page</div>;
};

export default page;

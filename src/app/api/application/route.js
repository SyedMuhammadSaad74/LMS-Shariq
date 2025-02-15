import { connectDB } from "@/lib/dbConnect";
import { BatchModal } from "@/lib/modals/BatchModal";
import { CourseModal } from "@/lib/modals/CourseModal";
import { AdmissionModal } from "@/lib/modals/AdmissionModal";
import { UserModal } from "@/lib/modals/UserModal";
import { ApplicationModal } from "@/lib/modals/ApplicationModal";


export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  let  newApplication = new ApplicationModal({...obj});
  newApplication = await newApplication.save();

  return Response.json({
    error : false,
    msg: "Application  Added Succesfully",
    application: newApplication,
  });
  }


export async function GET(req) {
  await connectDB();

    const reqUrl = req.url;
    const { searchParams } = new URL(reqUrl);
    const query = {};
    if (searchParams.get("course")) {
      query.course = searchParams.get("course");
    }
    if (searchParams.get("batch")) {
      query.batch = searchParams.get("batch");
    }
    if (searchParams.get("admission")) {
      query.admission = searchParams.get("admission");
    }
    if (searchParams.get("user")) {
      query.user = searchParams.get("user");
    }

    const applications = await ApplicationModal.find(query)
      .populate("course", "title")
      .populate("batch", "title")
      .populate("admission", "startDate endDate status")
      .populate("user", "fullname email profileImg");
    return Response.json({
      error: false,
      msg: "Applications Fetched Successfully",
      applications,
    });
  }

// export async function PUT(request) {
//   await connectDB();
//   const obj = await request.json();
//   const { id, status } = obj;

//   const updated = await ApplicationModal.findOneAndUpdate(
//     { _id: id },
//     {
//       status: status,
//     }
//   ).exec();

//   return Response.json({
//     error: false,
//     msg: "Admission Added Successfully",
//     application: updated,
//   });
// }

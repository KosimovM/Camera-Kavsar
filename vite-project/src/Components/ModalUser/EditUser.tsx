import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../Store/Store";
import { Update } from "../../Api/Class/Class";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface EditUserProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  user: {
    id: number;
    fullName: string;
    childName: string;
    phoneNumber: string;
    startTime: string;
    endTime: string;
    centerId: number;
    classRoomId: number;
  };
}

const EditUser = ({ open, setOpen, user }: EditUserProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [fullName, setFullName] = useState(user.fullName);
  const [childName, setChildName] = useState(user.childName);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [startTime, setStartTime] = useState(user.startTime);
  const [endTime, setEndTime] = useState(user.endTime);
  const [centerId, setCenterId] = useState(user.centerId);
  const [classRoomId, setClassRoomId] = useState(user.classRoomId);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setFullName(user.fullName);
      setChildName(user.childName);
      setPhoneNumber(user.phoneNumber);
      setStartTime(user.startTime);
      setEndTime(user.endTime);
      setCenterId(user.centerId);
      setClassRoomId(user.classRoomId);
    }
  }, [open, user]);

  const handleSave = async () => {

    setLoading(true);
    try {
      await dispatch(
        Update({
          id: user.id,
          fullName,
          childName,
          phoneNumber,
          startTime,
          endTime,
          centerId,
          classRoomId,
        })
      );
      alert("Пользователь успешно обновлён!");
      setOpen(false);
    } catch (error) {
      console.error(error);
      alert("Ошибка при обновлении пользователя");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
        >
          <X />
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Редактировать пользователя
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="ФИО"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Имя ребенка"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Телефон"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Время начала"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Время окончания"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="number"
            placeholder="ID Центра"
            value={centerId}
            onChange={(e) => setCenterId(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="number"
            placeholder="ID Кабинета"
            value={classRoomId}
            onChange={(e) => setClassRoomId(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSave}
            disabled={loading}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-blue-300"
          >
            {loading ? "Сохранение..." : "Сохранить"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;


import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../Store/Store";
import { UpdateCentr } from "../../Api/Centrs/Centrsapi";
import { useEffect, useState } from 'react';

interface EditProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: number;
  currentName: string;
  currentAddress: string;
}

const Edit = ({ open, setOpen, id, currentName, currentAddress }:EditProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState(currentName);
  const [address, setAddress] = useState(currentAddress);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setName(currentName);
      setAddress(currentAddress);
    }
  }, [open, currentName, currentAddress]);

  const handleUpdate = async () => {
    if (!name.trim() || !address.trim()) {
      alert("Введите название и адрес центра");
      return;
    }

    setLoading(true);
    try {
      await dispatch(UpdateCentr({ id, name, address }));
      alert("Центр успешно обновлён!");
      setOpen(false);
    } catch (error) {
      console.error(error);
      alert("Ошибка при обновлении центра");
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
          ✕
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Редактировать Центр
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Название центра"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Адрес центра"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleUpdate}
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

export default Edit;

import { useEffect, useState } from 'react';
import { faPeopleGroup, faCaretRight, faSchool, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import OpenCampusSVG from '../resources/OpenCampus Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { api } from '../auth/api';
import { useAuth } from '../auth/AuthContext';

type School = {
    id: number;
    name: string;
};

const AdminLayout = () => {
    const { user, accessToken, isRestoring, isClientReady, logout } = useAuth();
    const [schools, setSchools] = useState<School[]>([]);
    const [selectedSchool, setSelectedSchool] = useState<number | null>(null);
    const [schoolMenuOpen, setSchoolMenuOpen] = useState(false);

    useEffect(() => {
        if (!accessToken || isRestoring || !isClientReady) {
            return;
        }

        void loadSchools();
    }, [accessToken, isClientReady, isRestoring]);

    const loadSchools = async () => {
        try {
            const response = await api.get<School[]>('/school/');
            const data = response.data;

            setSchools(data);

            if (data.length > 0) {
                setSelectedSchool(data[0].id);
            }
        } catch (error) {
            console.error('Failed to load schools', error);
        }
    };

    const currentSchool = schools.find((school) => school.id === selectedSchool);

    return (
        <div className="flex h-screen flex-col">
            <div className="flex items-center bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 text-white shadow-lg">
                <img src={OpenCampusSVG} className="m-4 h-12 w-12" alt="OpenCampus" />

                <div className="px-4 text-2xl font-semibold tracking-tight">OpenCampus Administration</div>

                <div className="ml-3 hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200 lg:block">
                    {user?.username ?? 'Guest'}
                </div>

                <div className="ml-auto mr-4 flex items-center gap-3">
                    <button
                        onClick={() => void logout()}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        Sign out
                    </button>

                    <div className="relative">
                        <button
                            onClick={() => setSchoolMenuOpen(!schoolMenuOpen)}
                            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-slate-900 shadow"
                        >
                            <FontAwesomeIcon icon={faSchool} />

                            <span>{currentSchool?.name ?? 'Loading Schools...'}</span>

                            <FontAwesomeIcon icon={faCaretRight} />
                        </button>

                        {schoolMenuOpen ? (
                            <div className="absolute right-0 z-50 mt-2 min-w-64 border border-slate-200 bg-white shadow-xl text-slate-800">
                                {schools.map((school) => (
                                    <button
                                        key={school.id}
                                        onClick={() => {
                                            setSelectedSchool(school.id);
                                            setSchoolMenuOpen(false);
                                        }}
                                        className={`block w-full px-4 py-3 text-left transition hover:bg-slate-50 ${
                                            selectedSchool === school.id ? 'bg-slate-100' : ''
                                        }`}
                                    >
                                        {school.name}
                                    </button>
                                ))}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>

            <div className="flex flex-1 bg-slate-100">
                <div className="flex w-24 flex-col items-center bg-slate-300">
                    <div className="flex w-full items-center hover:bg-blue-600">
                        <div className="relative flex w-full items-center group">
                            <div className="m-2 text-slate-900">
                                <FontAwesomeIcon icon={faPeopleGroup} className="text-4xl" />
                                <div>People</div>
                            </div>

                            <div>
                                <FontAwesomeIcon icon={faCaretRight} />
                            </div>

                            <div className="absolute left-full top-0 hidden min-w-48 border bg-white shadow-lg group-hover:block">
                                <div className="p-2 hover:bg-gray-100">Students</div>
                                <div className="p-2 hover:bg-gray-100">Teachers</div>
                                <div className="p-2 hover:bg-gray-100">Parents</div>
                            </div>
                        </div>
                    </div>
        </div>
            </div>
        </div>
    );
};

export default AdminLayout;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, Trash2, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Lead {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  status: string;
  created_at: string;
}

const Admin = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (!user || error) {
      navigate("/admin/login");
      return;
    }

    // Verify the user has admin role
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin");

    if (!roles || roles.length === 0) {
      await supabase.auth.signOut();
      navigate("/admin/login");
      toast({ title: "Access denied", description: "You do not have admin privileges.", variant: "destructive" });
      return;
    }

    fetchLeads();
  };

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching leads:", error);
    } else {
      setLeads(data as Lead[]);
    }
    setLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("leads").update({ status }).eq("id", id);
    if (!error) {
      setLeads(leads.map((l) => (l.id === id ? { ...l, status } : l)));
      toast({ title: "Status updated" });
    }
  };

  const deleteLead = async (id: string) => {
    const { error } = await supabase.from("leads").delete().eq("id", id);
    if (!error) {
      setLeads(leads.filter((l) => l.id !== id));
      toast({ title: "Lead deleted" });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const statusColors: Record<string, string> = {
    new: "bg-blue-100 text-blue-800",
    contacted: "bg-yellow-100 text-yellow-800",
    qualified: "bg-green-100 text-green-800",
    closed: "bg-gray-100 text-gray-800",
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-4 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <h1 className="font-heading font-extrabold text-lg">
            D<span className="text-primary">K</span> — Leads
          </h1>
          <div className="flex items-center gap-3">
            <button onClick={fetchLeads} className="p-2 rounded-lg hover:bg-card transition-colors">
              <RefreshCw className="w-4 h-4" />
            </button>
            <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium hover:bg-card transition-colors">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6">
          <p className="text-muted-foreground text-sm">{leads.length} lead{leads.length !== 1 ? "s" : ""} total</p>
        </div>

        {loading ? (
          <p className="text-muted-foreground">Loading...</p>
        ) : leads.length === 0 ? (
          <p className="text-muted-foreground">No leads yet.</p>
        ) : (
          <div className="space-y-4">
            {leads.map((lead) => (
              <div key={lead.id} className="bg-card border border-border rounded-xl p-5">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="font-heading font-bold">{lead.name}</p>
                    <p className="text-sm text-muted-foreground">{lead.email}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <select
                      value={lead.status}
                      onChange={(e) => updateStatus(lead.id, e.target.value)}
                      className={`text-xs font-medium rounded-lg px-3 py-1.5 border-0 cursor-pointer ${statusColors[lead.status] || statusColors.new}`}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="qualified">Qualified</option>
                      <option value="closed">Closed</option>
                    </select>
                    <button onClick={() => deleteLead(lead.id)} className="p-1.5 rounded-lg hover:bg-destructive/10 text-destructive transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-xs text-primary font-medium mb-2">{lead.service}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{lead.message}</p>
                <p className="text-xs text-muted-foreground mt-3">
                  {new Date(lead.created_at).toLocaleDateString("el-GR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;

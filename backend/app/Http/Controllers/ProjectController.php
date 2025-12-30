<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    /**
     * Display a listing of the resource.
     */
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $projects = Project::all();
        if ($request->wantsJson() || $request->is('api/*')) {
            return response()->json($projects);
        }
        return view('admin.index', compact('projects'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image_url' => 'nullable|url',
            'link' => 'nullable|url',
            'technologies' => 'required',
        ]);

        $project = Project::create($validated);

        if ($request->wantsJson() || $request->is('api/*')) {
            return response()->json($project, 201);
        }
        return redirect()->route('admin.projects.index')->with('success', 'Project created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Project $project)
    {
        if ($request->wantsJson() || $request->is('api/*')) {
            return response()->json($project);
        }
        return view('admin.show', compact('project'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        return view('admin.edit', compact('project'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'image_url' => 'nullable|url',
            'link' => 'nullable|url',
            'technologies' => 'sometimes',
        ]);

        $project->update($validated);

        if ($request->wantsJson() || $request->is('api/*')) {
            return response()->json($project);
        }
        return redirect()->route('admin.projects.index')->with('success', 'Project updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Project $project)
    {
        $project->delete();

        if ($request->wantsJson() || $request->is('api/*')) {
            return response()->json(null, 204);
        }
        return redirect()->route('admin.projects.index')->with('success', 'Project deleted successfully.');
    }
}

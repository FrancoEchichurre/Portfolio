@extends('layout')

@section('content')
    <h1>Edit Project</h1>

    <form action="{{ route('admin.projects.update', $project) }}" method="POST">
        @csrf
        @method('PUT')

        <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" id="title" name="title" value="{{ $project->title }}" required>
        </div>

        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="description" name="description" rows="3"
                required>{{ $project->description }}</textarea>
        </div>

        <div class="mb-3">
            <label for="image_url" class="form-label">Image URL</label>
            <input type="url" class="form-control" id="image_url" name="image_url" value="{{ $project->image_url }}">
        </div>

        <div class="mb-3">
            <label for="link" class="form-label">Project Link</label>
            <input type="url" class="form-control" id="link" name="link" value="{{ $project->link }}">
        </div>

        <div class="mb-3">
            <label for="technologies" class="form-label">Technologies</label>
            <input type="text" class="form-control" id="technologies" name="technologies"
                value="{{ is_array($project->technologies) ? json_encode($project->technologies) : $project->technologies }}"
                required>
        </div>

        <button type="submit" class="btn btn-success">Update Project</button>
        <a href="{{ route('admin.projects.index') }}" class="btn btn-secondary">Cancel</a>
    </form>
@endsection